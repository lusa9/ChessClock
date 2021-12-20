interface Props {
  column?: Boolean;
  columnReverse?: Boolean;
  justifyContentSpaceBetween?: Boolean;
  justifyContentCenter?: Boolean;
  justifyContentEnd?: Boolean;
  alignItemsStart?: Boolean;
  alignItemsCenter?: Boolean;
  alignItemsEnd?: Boolean;
  grow?: Boolean;
  noShrink?: Boolean;
  wrap?: Boolean;
  gap?: number;
  children?: React.ReactNode;
  className?: string;
  dataTest?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * Typescript wrapper around Flex layout basics.
 */
const Flex: React.FC<Props> = ({
  column,
  columnReverse,
  justifyContentSpaceBetween,
  justifyContentCenter,
  justifyContentEnd,
  alignItemsStart,
  alignItemsCenter,
  alignItemsEnd,
  grow,
  noShrink,
  wrap,
  gap,
  children,
  className,
  style,
  onClick,
  onMouseEnter,
  onMouseLeave,
  dataTest,
}) => (
  <div
    data-test={dataTest}
    style={{
      display: "flex",
      flexDirection:
        (column && "column") ||
        (columnReverse && "column-reverse") ||
        undefined,
      justifyContent:
        (justifyContentSpaceBetween && "space-between") ||
        (justifyContentCenter && "center") ||
        (justifyContentEnd && "flex-end") ||
        undefined,
      alignItems:
        (alignItemsStart && "flex-start") ||
        (alignItemsCenter && "center") ||
        (alignItemsEnd && "flex-end") ||
        undefined,
      flexGrow: (grow && 1) || undefined,
      flexShrink: (noShrink && 0) || undefined,
      flexWrap: wrap && "wrap",
      gap,
      ...style,
    }}
    {...{ className, children, onClick, onMouseEnter, onMouseLeave }}
  />
);

export default Flex;
