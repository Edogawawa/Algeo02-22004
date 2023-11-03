const TableKasir = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-fit border-gray-700 my-1 flex flex-col justify-between">
      <div class="h-fit flex flex-col">
        <div class="h-fit overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="h-fit inline-block min-w-full py-1 sm:px-6 lg:px-8">
            <div class="h-fit overflow-hidden">
              <table class="h-fit min-w-full text-left text-sm font-light text-black">
                <thead class="h-fit border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6">
                      No
                    </th>
                    <th scope="col" class="px-6">
                      Waktu
                    </th>
                    <th scope="col" class="px-6">
                      Nominal
                    </th>
                    <th scope="col" class="px-6">
                      Asli
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-2">asu</td>
                    <td class="whitespace-nowrap px-6 py-2">tes</td>
                    <td class="whitespace-nowrap px-6 py-2">kontol</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-2">awokwao</td>
                    <td class="whitespace-nowrap px-6 py-2">ares</td>
                    <td class="whitespace-nowrap px-6 py-2">zeus</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-2">p</td>
                    <td class="whitespace-nowrap px-6 py-2">wwkwk</td>
                    <td class="whitespace-nowrap px-6 py-2">awokawok</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">4</td>
                    <td class="whitespace-nowrap px-6 py-2">asu</td>
                    <td class="whitespace-nowrap px-6 py-2">tes</td>
                    <td class="whitespace-nowrap px-6 py-2">kontol</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">5</td>
                    <td class="whitespace-nowrap px-6 py-2">awokwao</td>
                    <td class="whitespace-nowrap px-6 py-2">ares</td>
                    <td class="whitespace-nowrap px-6 py-2">zeus</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">6</td>
                    <td class="whitespace-nowrap px-6 py-2">p</td>
                    <td class="whitespace-nowrap px-6 py-2">wwkwk</td>
                    <td class="whitespace-nowrap px-6 py-2">awokawok</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">7</td>
                    <td class="whitespace-nowrap px-6 py-2">asu</td>
                    <td class="whitespace-nowrap px-6 py-2">tes</td>
                    <td class="whitespace-nowrap px-6 py-2">kontol</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">8</td>
                    <td class="whitespace-nowrap px-6 py-2">awokwao</td>
                    <td class="whitespace-nowrap px-6 py-2">ares</td>
                    <td class="whitespace-nowrap px-6 py-2">zeus</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-2 font-medium">9</td>
                    <td class="whitespace-nowrap px-6 py-2">p</td>
                    <td class="whitespace-nowrap px-6 py-2">wwkwk</td>
                    <td class="whitespace-nowrap px-6 py-2">awokawok</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = (props) => {
  const { title } = props;
  return (
    <thead class="h-fit border-b font-medium dark:border-neutral-500">
      <tr>
        <th scope="col" class="px-6">
          No
        </th>
        <th scope="col" class="px-6">
          Waktu
        </th>
        <th scope="col" class="px-6">
          Nominal
        </th>
        <th scope="col" class="px-6">
          Asli
        </th>
      </tr>
    </thead>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-fit">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {name}
        </h5>
        <p className="text-m text-black">{children}</p>
      </a>
    </div>
  );
};

TableKasir.Header = Header;
TableKasir.Body = Body;

export default TableKasir;
