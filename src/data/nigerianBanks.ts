import axios from "axios";

const API_KEY = "sk_live_b22f4ac1ebf7a1cd33df099a7de8a731f08d24f7"; // Replace with your Paystack secret key

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
