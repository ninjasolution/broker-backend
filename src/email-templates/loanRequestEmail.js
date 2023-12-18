module.exports = (data) => {

    return `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Request Form</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
  
      section {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 400px;
      }
  
      h2 {
        margin-bottom: 20px;
        color: #333;
      }
  
      p {
        margin-bottom: 10px;
        color: #555;
        column-width: 200px;
      }
    </style>
  </head>
  <body>
  
    <section>
      <h2>Loan Request Form</h2>
  
      <p><strong>Expectation Amount:</strong> $${data?.amount}</p>
      <p><strong>Monthly Turnover:</strong> $${data?.mTurnover}</p>
      <p><strong>Any Defaults in the Past?</strong> ${data?.hasDefault}</p>
      <p><strong>Duration:</strong> ${data?.duration}</p>
      <p><strong>Has Properties?</strong> ${data?.hasProperty}</p>
      <p><strong>Location:</strong> ${data?.location}</p>
  
      <h3>Contact Information</h3>
      <p><strong>First Name:</strong> ${data?.contact?.firstName}</p>
      <p><strong>Last Name:</strong> ${data?.contact?.lastName}</p>
      <p><strong>Email:</strong> ${data?.contact?.email}</p>
      <p><strong>Phone Number:</strong> ${data?.contact?.phone}</p>
    </section>
  
  </body>`
}