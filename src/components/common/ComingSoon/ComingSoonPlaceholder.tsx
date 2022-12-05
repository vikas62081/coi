interface PlaceholderProps {
  title: string;
}

function ComingSoonPlaceholder({ title }: PlaceholderProps) {
  return <h2 style={{ margin: 0 }}>{title} Coming Soon...</h2>;
}

export default ComingSoonPlaceholder;
