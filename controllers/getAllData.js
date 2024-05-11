import { reportModel } from "../models/index.js";

export const getAllData = async (req, res) => {
    try {
        const foundData = await reportModel.find();
        if (!foundData || foundData.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No data found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "All data",
            data: foundData
        })
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}