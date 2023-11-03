const Table = () => {
  return (
    <div className="w-full bg-gray-800 border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light text-white">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      No
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Waktu
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Nominal
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Asli
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                    <td class="whitespace-nowrap px-6 py-4">asu</td>
                    <td class="whitespace-nowrap px-6 py-4">tes</td>
                    <td class="whitespace-nowrap px-6 py-4">kontol</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                    <td class="whitespace-nowrap px-6 py-4">awokwao</td>
                    <td class="whitespace-nowrap px-6 py-4">ares</td>
                    <td class="whitespace-nowrap px-6 py-4">zeus</td>
                  </tr>
                  <tr class="border-b dark:border-neutral-500">
                    <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                    <td class="whitespace-nowrap px-6 py-4">p</td>
                    <td class="whitespace-nowrap px-6 py-4">wwkwk</td>
                    <td class="whitespace-nowrap px-6 py-4">awokawok</td>
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

export default Table;
