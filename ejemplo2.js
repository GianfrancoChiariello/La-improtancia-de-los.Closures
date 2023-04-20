function Entity({ id, cash }) {
  const handleSubmit = () => {
    updateEntityCash(id, cash).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <p>ID: {id}</p>
      <p>Cash: {cash}</p>
      <button onClick={handleSubmit}>Actualizar</button>
    </div>
  );
}
