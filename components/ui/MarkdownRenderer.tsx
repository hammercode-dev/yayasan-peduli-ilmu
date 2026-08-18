import Markdown from "react-markdown"
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import styles from './MarkdownRenderer.module.css';

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'iframe'],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      ['src', /^https:\/\/(www\.)?(youtube\.com|youtube-nocookie\.com)\//],
      'width',
      'height',
      'title',
      'loading',
      'allow',
    ],

    div: [...(defaultSchema.attributes?.div ?? []), 'dataYoutubeVideo'],
  },
};

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return (
    <div className={styles.markdown}>
    <Markdown
      rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
      components={{
        iframe: ({ src, width, height, title, loading }) => (
          <iframe
            src={src}
            width={width}
            height={height}
            title={title}
            loading={loading}
            allowFullScreen
          />
        ),
      }}
    >
      {markdown}
    </Markdown>
    </div>
  )
}

export default MarkdownRenderer
