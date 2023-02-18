const prisma = require('../utils/prisma');
const serviceCtrl = {
	createService: async (req,res,next) => {
		try{
			const {serviceImage,serviceName,serviceDescription, serviceContact, serviceLineContact,serviceDistance} = req.body
			await prisma.servive.create({
				data:{
					serviceImage: serviceImage,
					serviceName: serviceName,
					serviceDescription: serviceDescription,
					serviceContact: serviceContact,
					serviceLineContact: serviceLineContact,
					serviceDistance: serviceDistance    
				}
			})
			res.status(200).json({message:"add service Success!!!"})
		}catch (err){
			res.status(500).json({message: err.message});
		}
	},
	getAllService: async (req,res,next) => {
		try{
			const result = await prisma.servive.findMany()
			res.status(200).json({data: result});
		}catch (err){
			res.status(500).json({message: err.message});
		}
	} 
}

module.exports = serviceCtrl