interface TList<T> {
  data: T[];
  render: (items: T) => React.ReactNode;
}

export const List = <T extends {}>({ data, render }: TList<T>) => {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export const RenderList = <T extends { name: string }>({
  data,
}: {
  data: T[];
}) => {
  return (
    <List
      data={data}
      render={(item) => (
        <>
          {item.name}
          <button onClick={() => alert(item)}>show name</button>
        </>
      )}
    />
  );
};
