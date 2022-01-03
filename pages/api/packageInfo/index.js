import { packages } from "../../../data/packageInfo";

export default function handler(req, res) {
    res.status(200).json(packages);
}



