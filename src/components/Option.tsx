function Option(props: { id: number }) {
  const ID = `option-${props.id}`;
  return (
    <div>
      <label htmlFor={ID}>Option {props.id}</label>
      <input id={ID} type="text" name={ID} />
    </div>
  );
}

export default Option;
