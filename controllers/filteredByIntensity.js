import { reportModel } from "../models/index.js";

export const filteredByIntensity = async (req, res) => {
    try {
        const { intensity } = req.params;
        const foundData = await reportModel.find({ intensity: parseInt(intensity) });
        if (!foundData || foundData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Data Found",
            })
        }
        return res.status(200).json({
            success: true,
            message: `Filtered by intensity: ${intensity}`,
            data: foundData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}