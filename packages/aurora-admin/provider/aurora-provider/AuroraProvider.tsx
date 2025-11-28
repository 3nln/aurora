import { AuroraUI } from "./AuroraUI";

export const AuroraProvider = (props) => {
  const {
    children,
    layout
  } = props;


  return (
    <>
      <AuroraUI
        layout={layout}
      >
        {children}
      </AuroraUI>
    </>
  );
};
