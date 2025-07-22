import Markdown from "react-markdown"
import styles from './MarkdownRenderer.module.css';

const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  return (
    <div className={styles.markdown}>
    <Markdown>
      {markdown}
    </Markdown>
    </div>
  )
}

export default MarkdownRenderer
