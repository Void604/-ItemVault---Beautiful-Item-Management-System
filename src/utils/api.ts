// Simulated API calls for demonstration
export const simulateEmailSend = async (itemName: string, recipientEmail: string = 'admin@example.com') => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  console.log(`Email sent to ${recipientEmail} regarding enquiry for: ${itemName}`);
  
  // Simulate success response
  return {
    success: true,
    message: 'Enquiry sent successfully!'
  };
};

export const simulateItemUpload = async (item: any) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log('Item uploaded to database:', item);
  
  return {
    success: true,
    data: item
  };
};