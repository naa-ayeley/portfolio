import { BsDot } from "react-icons/bs";

export default function ListItem({ item }: { item: string }) {
    return (
        <li className="flex items-center">
            <BsDot className="text-5xl flex-shrink-0" />
            <p>
                {item}
            </p>
        </li>
    )
}