import {ZodError} from 'zod';

const validateForm = (schema) => (req, res, next) => {

  try {

    schema.parse(req.body);
    next();
    
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
                error: error.issues.map((err)=>({
                    path: err.path[0],
                    message: err.message
                }))
            })
    }
    else {
      return res.status(500).json({message: 'Server error'});
    }
  }


}

export default validateForm;