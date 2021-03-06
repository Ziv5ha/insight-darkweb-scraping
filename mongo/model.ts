import dotenv from 'dotenv';
dotenv.config();
import { connect, model, Schema } from 'mongoose';
if (process.env.DATABASE) {
  connect(process.env.DATABASE)
    .then(() => {
      console.log('Connected to DB');
    })
    .catch((error) => console.log(error));
}
interface Paste {
  author: string;
  title: string;
  content: string;
  date: Date;
}

const schema = new Schema<Paste>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
});

const PasteModel = model<Paste>('Paste', schema);
export default PasteModel;
