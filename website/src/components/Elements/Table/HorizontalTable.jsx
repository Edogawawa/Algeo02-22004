const HorizontalTable = () => {
  return (
    <div className="w-full bg-gray-800 border-gray-700 shadow mx-2 flex flex-col justify-between overflow-hidden">
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light text-white">
                <div className="flex flex-row">
                  <tbody>
                    <tr class="dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6  font-medium w-screen">
                        Total
                      </td>
                      <td class="whitespace-nowrap px-6 ">asu</td>
                    </tr>
                    <tr class="dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Harga
                      </td>
                      <td class="whitespace-nowrap px-6 py-2">awokwao</td>
                    </tr>
                    <tr class="dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-2 font-medium">
                        Kembali
                      </td>
                      <td class="whitespace-nowrap px-6 py-2">p</td>
                    </tr>
                  </tbody>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTable;
