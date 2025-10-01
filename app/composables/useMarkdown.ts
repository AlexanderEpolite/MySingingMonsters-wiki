import { marked } from 'marked';

export const useMarkdown = () => {
  const loadGuide = async (guideName: string) => {
    try {
      // Dynamically import the markdown file
      const module = await import(`~/data/guides/${guideName}.md?raw`);
      const markdown = module.default;
      
      // Configure marked options
      marked.setOptions({
        gfm: true, // GitHub Flavored Markdown
        breaks: true, // Convert \n to <br>
      });
      
      // Parse markdown to HTML
      const html = await marked.parse(markdown);
      
      return html;
    } catch (error) {
      console.error(`Failed to load guide: ${guideName}`, error);
      return null;
    }
  };
  
  return {
    loadGuide
  };
};
