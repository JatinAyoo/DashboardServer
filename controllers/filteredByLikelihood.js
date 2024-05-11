import { reportModel } from "../models/index.js";

export const filteredByLikelihood = async (req, res) => {
    try {
        const { likelihood } = req.params;
        const foundData = await reportModel.find({ likelihood: parseInt(likelihood) });
        if (!foundData || foundData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by likelihood: ${likelihood}`,
            data: foundData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}