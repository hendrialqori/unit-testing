//HOC adalah Sebuah function yang me-return
// component JSX, Dengan parameter Sebuah Component JSX

export const withLayoutHOC = <T extends {}>(
  Component: React.ComponentType<T>
) => {
  const desc = "This in High Order Component!";
  return (props: T) => (
    <div>
      <header>ini headers</header>
      <Component {...props} desc={desc} />
      <footer>ini footer</footer>
    </div>
  );
};

const WithLayout = ({ desc }: { desc?: string }) => {
  return <div>Hendri - {desc}</div>;
};

export const RenderWithLayout = withLayoutHOC(WithLayout);
