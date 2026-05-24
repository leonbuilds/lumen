type RepoStats = { stars: number | null };

export async function getRepoStats(repo: string): Promise<RepoStats> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { stars: null };
    const data = (await res.json()) as { stargazers_count?: number };
    return { stars: typeof data.stargazers_count === "number" ? data.stargazers_count : null };
  } catch {
    return { stars: null };
  }
}
