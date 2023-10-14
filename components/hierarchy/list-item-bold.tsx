import { BsDot } from "react-icons/bs";

export default function ListItemBold({ bold, item }: { bold: string; item: string }) {
    return (
        <li className="flex items-start">
            <BsDot className="text-4xl -mt-2 flex-shrink-0" />
            <p className="font-light">
                <span className="font-medium">{bold}</span>
                {item}
            </p>
        </li>
    )
}