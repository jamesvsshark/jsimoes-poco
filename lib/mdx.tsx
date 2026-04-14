import { compileMDX } from "next-mdx-remote/rsc";
import { Callout } from "@/components/callout";

const components = {
  Callout,
};

export async function renderInsight(source: string) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
    },
    components,
  });

  return content;
}
