import { Link } from "react-router-dom"
import { generateId } from "../../../shared/utils"

export const Tags = ({ tags = [] }) => {
  return (
    <div className="flex gap-2">
        {tags.map((tag) => (
            <Link
            key={generateId()}
            to="#"
            className="px-2 py-1 font-bold text-white bg-unah-blue rounded hover:bg-unah-blueLight"
        >
            {tag}
        </Link>
        ))}
    </div>
  )
}
