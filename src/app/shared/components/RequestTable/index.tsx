'use client';

import { formatPrice } from '../../utils/transformers';

const rows = [
  // isso virá da api;
  {
    name: 'Arroz Integral 1kg',
    brand: 'Terra Nova',
    date: '27/11/2023',
    quantity: 100,
    price: 5.99,
    color: 'bg-[#583ED3]'
  },
  {
    name: 'Leite Desnatado',
    brand: 'Fazenda Feliz',
    date: '25/11/2023',
    quantity: 50,
    price: 3.49,
    color: 'bg-[#BD1B56]'
  },
  {
    name: 'Maçãs Gala (kg)',
    brand: 'Pomar Fresco',
    date: '30/11/2023',
    quantity: 75,
    price: 2.79,
    color: 'bg-[#FFFFFF]'
  },
  {
    name: 'Azeite de Oliva Extra Virgem 500ml',
    brand: 'Sabor Dourado',
    date: '28/11/2023',
    quantity: 30,
    price: 8.99,
    color: 'bg-[#1d0b70]'
  },
  {
    name: 'Café Torrado e Moído 250g',
    brand: 'Café do Sítio',
    date: '26/11/2023',
    quantity: 40,
    price: 6.49,
    color: 'bg-[#FF0000]'
  },
  {
    name: 'Iogurte Natural 400g',
    brand: 'Laticínios Saboroso',
    date: '29/11/2023',
    quantity: 60,
    price: 2.29,
    color: 'bg-[#1e594f]'
  }
];

export function RequestTable() {
  return (
    <div className="relative w-full max-w-7xl h-full max-h-[450px] ring-1 ring-purple bg-darkblue px-1 m-auto overflow-hidden rounded-2xl">
      <div className="relative w-full max-w-7xl h-full max-h-[450px] m-auto overflow-x-auto overflow-y-scroll rounded-2xl">
        <div className="table w-full p-6 text-white bg-darkblue">
          <div className="table-header-group border-purple">
            <div className="table-row">
              <div className="table-cell text-left pb-6 px-8 pl-16">Nome</div>
              <div className="table-cell text-left pb-6 px-8">Marca</div>
              <div className="table-cell text-left pb-6 px-8">Data</div>
              <div className="table-cell text-left pb-6 px-8">Quantidade</div>
              <div className="table-cell text-left pb-6 px-8">Preço</div>
            </div>
          </div>
          <div className="absolute w-full h-0.5 top-14 -left-1 bg-purple" />
          <div className="table-row-group">
            {rows.map((content, i) => {
              return (
                <div key={i} className="table-row h-10">
                  <div className="table-cell py-4 w-72">
                    <div className="h-20 flex items-center pl-16 rounded-tl-2xl rounded-bl-2xl bg-easydark px-8 truncate relative">
                      <div className="bg-darkblue flex items-center justify-center absolute w-3 h-10 rounded-2xl left-0">
                        <div className={`w-1 h-6 rounded-2xl ${content.color}`} />
                      </div>
                      {content?.name}
                    </div>
                  </div>
                  <div className="table-cell py-4 w-72 relative">
                    <div className="h-20 flex items-center bg-easydark px-8 truncate">
                      {content?.brand}
                    </div>
                  </div>
                  <div className="table-cell py-4 w-72">
                    <div className="h-20 flex items-center bg-easydark px-8 truncate">
                      {content?.date}
                    </div>
                  </div>
                  <div className="table-cell py-4 w-72">
                    <div className="h-20 flex items-center bg-easydark px-8 truncate">
                      {content?.quantity}
                    </div>
                  </div>
                  <div className="table-cell py-4 w-72">
                    <div className="h-20 flex items-center rounded-br-2xl rounded-tr-2xl bg-easydark px-8 truncate">
                      {formatPrice(content?.price)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
