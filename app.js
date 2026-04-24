const feedbacks = [
    { name: "Ali", rating: 5, comment: "Great course" },
    { name: "Sara", rating: 3, comment: "Good" },
    { name: "", rating: 4, comment: "Nice" },
    { name: "Omar", rating: 6, comment: "Excellent" }
  ];
  
  const validateFeedback = (feedback) => {
    const { name, rating, comment } = feedback;
    return name && rating >= 1 && rating <= 5 && comment;
  };
  
  const processFeedbacks = (data) => {
    const valid = [];
    const invalid = [];
  
    data.forEach(fb => {
      validateFeedback(fb) ? valid.push(fb) : invalid.push(fb);
    });
  
    const averageRating =
      valid.reduce((sum, fb) => sum + fb.rating, 0) / (valid.length || 1);
  
    return {
      valid,
      invalid,
      summary: {
        total: data.length,
        validCount: valid.length,
        invalidCount: invalid.length,
        averageRating
      }
    };
  };
  
  const result = processFeedbacks(feedbacks);
  
  console.log(JSON.stringify(result, null, 2));