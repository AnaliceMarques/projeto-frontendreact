import { FilterContainer, Input, CamposDeBusca } from "./filterStyle";

export const Filters = ({
  nameFilter,
  setNameFilter,
  minPriceFilter,
  setMinPriceFilter,
  maxPriceFilter,
  setMaxPriceFilter,
}) => {
  //Função que captura o valor do nome
  const handleName = (e) => {
    setNameFilter(e.target.value);
  };

  //Função que captura o valor do preço (dentro do onChange)
  // (e) => setPriceFilter(e.target.value)

  return (
    <FilterContainer>
      <h2>Filtros</h2>
      <CamposDeBusca>
        <p>
          <label htmlFor="minimo">
            Valor Mínimo:
            <br />
            <Input
              type="number"
              id="minimo"
              name="minimo"
              placeholder="Digite um valor"
              value={minPriceFilter}
              onChange={(e) => setMinPriceFilter(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="maximo">
            Valor Máximo:
            <br />
            <Input
              type="number"
              id="maximo"
              name="maximo"
              placeholder="Digite um valor"
              value={maxPriceFilter}
              onChange={(e) => setMaxPriceFilter(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label htmlFor="nome">
            Buscar por Nome:
            <br />
            <Input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite um nome"
              value={nameFilter}
              onChange={handleName}
            />
          </label>
        </p>
      </CamposDeBusca>
    </FilterContainer>
  );
};
