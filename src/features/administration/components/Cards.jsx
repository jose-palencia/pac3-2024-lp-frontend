import { FaComments } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdPricetags } from "react-icons/io";

export const Cards = () => {
  return (
    <div className="flex items-center text-gray-800">
      <div className="p-4 w-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                <HiOutlineUsers className="w-6 h-6" />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Usuarios</div>
                <div className="font-bold text-lg">1259</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                <IoMdPricetags className="w-6 h-6" />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Etiquetas</div>
                <div className="font-bold text-lg">230</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                <GrNotes className="w-6 h-6" />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Publicaciones</div>
                <div className="font-bold text-lg">190</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="flex flex-row bg-white shadow-sm rounded p-4">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                <FaComments className="w-6 h-6" />
              </div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm text-gray-500">Comentarios</div>
                <div className="font-bold text-lg">320</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
