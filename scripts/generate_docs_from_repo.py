#!/usr/bin/env python3
"""
Generate markdown pages under docs/generated/ from repository files
so MkDocs will build and index repository content for search.

It:
- Skips these top-level directories: .git, docs, .github, site, gh-pages, node_modules, venv, .venv
- Processes files with allowed extensions and writes them as .md under docs/generated/<path>.md
- For .md files it copies content (with a header). For others it embeds the file in a fenced code block.
- Produces docs/generated/index.md listing links to generated pages.
"""
from pathlib import Path
import os

ROOT = Path.cwd()
OUT = ROOT / "docs" / "generated"
EXCLUDE_TOP = {".git", "docs", ".github", "site", "gh-pages", "node_modules", "venv", ".venv", "__pycache__", "scripts"}
ALLOWED_EXT = {".md", ".py", ".sql", ".txt", ".json", ".yml", ".yaml", ".csv", ".ini", ".cfg", ".rst", ".html", ".xml", ".ipynb"}

GITHUB_REPO = os.environ.get("GITHUB_REPOSITORY", "rwlpf/Resources")
GITHUB_REF = os.environ.get("GITHUB_REF", "refs/heads/master")
# derive branch name from ref if available
if GITHUB_REF.startswith("refs/heads/"):
    BRANCH = GITHUB_REF.split("/", 2)[-1]
else:
    BRANCH = "master"


def safe_read(p: Path):
    try:
        return p.read_text(encoding="utf-8")
    except Exception:
        try:
            return p.read_text(encoding="latin-1")
        except Exception:
            return None


def make_github_url(p: Path):
    rel = p.relative_to(ROOT).as_posix()
    return f"https://github.com/{GITHUB_REPO}/blob/{BRANCH}/{rel}"


def target_path_for(p: Path):
    rel = p.relative_to(ROOT)
    # convert extension to .md and put under docs/generated
    return OUT / rel.with_suffix(".md")


def should_process(p: Path):
    if not p.is_file():
        return False
    parts = p.relative_to(ROOT).parts
    if parts[0] in EXCLUDE_TOP:
        return False
    if p.suffix.lower() not in ALLOWED_EXT:
        return False
    return True


def emit_file(p: Path):
    content = safe_read(p)
    if content is None:
        return None
    outp = target_path_for(p)
    outp.parent.mkdir(parents=True, exist_ok=True)
    github_url = make_github_url(p)
    title = "/".join(p.relative_to(ROOT).parts)
    if p.suffix.lower() == ".md":
        md = f"# {title}\n\n*Original file: [{p.name}]({github_url})*\n\n" + content
    else:
        lang = p.suffix.lower().lstrip(".")
        # avoid huge blocks for notebooks, treat .ipynb as JSON/text
        md = f"# {title}\n\n*Original file: [{p.name}]({github_url})*\n\n```{lang}\n" + content + "\n```\n"
    outp.write_text(md, encoding="utf-8")
    return outp


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    generated = []
    for p in ROOT.rglob("*"):
        if should_process(p):
            written = emit_file(p)
            if written:
                generated.append(written.relative_to(OUT))
    # create an index page
    index_lines = ["# Repository files (generated)\n", "This page is auto-generated. Use site search to find content.\n", "## Files\n"]
    for rel in sorted(generated):
        page_path = rel.as_posix()
        link = f"generated/{page_path}"
        title = page_path
        index_lines.append(f"- [{title}]({link})\n")
    (OUT / "index.md").write_text("\n".join(index_lines), encoding="utf-8")
    print(f"Generated {len(generated)} pages under {OUT}")


if __name__ == "__main__":
    main()
