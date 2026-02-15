import { contactMe } from "../../utils/nodemailer.js";

class UsersController {

  recieveUserInfo = async (req, res) => {
    try {
      await contactMe(req.body);
      res.status(200).json('ok')
    } catch (error) {
      res.status(500).json('Not ok');
    }
  }
}

export default new UsersController();