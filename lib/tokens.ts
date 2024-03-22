import { getVerificationTokenByEmail } from "@/data/verification-token";
import {v4 as uuidv4 } from "uuid"
import {db} from "@/lib/db"

export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();

    const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

    const existingToken = await getVerificationTokenByEmail(email)

    //delete a verification token if any exist
    if (existingToken) {
        await db.verificationToken.delete({
          where: {
            id: existingToken.id,
          },
        });
      }

      // create a new verification token
      const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
      });
      return verificationToken
}