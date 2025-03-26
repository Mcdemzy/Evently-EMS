import axios from "axios";

const API_KEY = import.meta.env.VITE_PAYSTACK_SECRET_KEY;

export const fetchBanks = async () => {
  try {
    const response = await axios.get("https://api.paystack.co/bank", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching banks:", error);
    return [];
  }
};
export const verifyAccountNumber = async (
  bankCode: string,
  accountNumber: string
) => {
  try {
    const response = await axios.get(
      `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`,
      {
        headers: { Authorization: `Bearer ${API_KEY}` },
      }
    );

    return response.data.data.account_name; // Returns the verified account name
  } catch (error) {
    console.error("Error verifying account:", error);
    return ""; // Return an empty string if verification fails
  }
};
