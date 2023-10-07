import { BsDot } from "react-icons/bs";

export default function ListItem({ item }: { item: string }) {
    return (
        <li className="flex items-start">
            <BsDot className="text-4xl -mt-2 flex-shrink-0" />
            <p>
                {item}
            </p>
        </li>
    )
}