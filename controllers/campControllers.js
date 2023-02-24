const prisma = require('../utils/prisma');

const campCtrl = {
	addCamp: async (req, res) => {
		try {
			const { campImage, campName,
				campDescription, campLocation,
				bookingPrice, campRating, 
				campPromotionRating, campFeeDescription,
				campFacility, rentalEquipment, wifi, phoneSignal, electricity
				,toilet 
			 } = req.body
			await prisma.camp.create({
				data:{
					campImage: campImage,
					campName: campName,
					campDescription:campDescription,
					campLocation:campLocation,
					bookingPrice: bookingPrice,
					campRating:campRating,
					campPromotionRating:campPromotionRating,
					campFeeDescription:campFeeDescription,
					campFacility:campFacility,
					rentalEquipment:rentalEquipment,
					wifi: wifi,
					phoneSignal: phoneSignal,
					electricity:electricity,
					toilet:toilet
				} 
			})
			res.status(200).json({ message: "addCamp success" })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	getAllCamp: async (req, res) => {
		try {
			const result = await prisma.camp.findMany()
			res.status(200).json({ data: result })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	}, 
	getCampById: async (req, res) => {
		try {
			const { id } = req.body
			const result = await prisma.camp.findUnique({
				where:{
					id:id
				}
			})
			res.status(200).json({ data: result })
		} catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	booking: async (req, res,next) =>{
		try{
			const {userId, campId, campAmount, startDate, endDate,
				phoneNumber,name ,age, birthDate, email ,address
			} = req.body
			const result = await prisma.booking.create({
				data:{
					userId: userId,
					campId: campId,
					campAmount: campAmount,
					startDate: startDate,
					endDate: endDate,
					phoneNumber: phoneNumber,
					name: name,
					age: age,
					birthDate: birthDate,
					email:email,
					address:address
				}
			})
			res.status(200).json({data: result})
		}catch (err) {
			res.status(500).json({ message: err.message })
		}
	},
	generateQrCode : async (req,res,next) => {
		
	}
}

module.exports = campCtrl