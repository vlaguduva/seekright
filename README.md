# SeekRight

SeekRight is a comprehensive AI assessment tool designed to simplify the process of evaluating various concepts, ideas, and assets. The application provides users with a user-friendly interface to conduct assessments, manage data, and generate reports.

## Features

- **AI-Driven Assessments**: Utilize AI technology to enhance the assessment process.
- **User-Friendly Interface**: Intuitive design for easy navigation and interaction.
- **Real-Time Data Analysis**: Analyze data as you input it for immediate feedback.
- **Comprehensive Reporting Tools**: Generate detailed reports based on assessments.
- **Dark Mode Support**: Switch between light and dark themes for user comfort.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React-Bootstrap**: Bootstrap components built with React for responsive design.
- **Formik**: Library for building forms in React with ease.
- **Yup**: Schema builder for value parsing and validation.
- **React Router**: Declarative routing for React applications.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/vlaguduva/seekright.git
   ```

2. Navigate to the project directory:
   ```bash
   cd seekright
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Installation of Ollama

Ollama is a tool that allows you to run large language models locally. To use Ollama with the SeekRight application, follow these steps:

1. **Install Ollama**: You can install Ollama by following the instructions on the [Ollama website](https://ollama.com/docs/installation). The installation process may vary depending on your operating system.

2. **Verify Installation**: After installation, verify that Ollama is installed correctly by running the following command in your terminal:
   ```bash
   ollama --version
   ```

3. **Download a Model**: Once Ollama is installed, you can download a model to use for assessments. For example, to download the `llama2` model, run:
   ```bash
   ollama pull llama2
   ```

4. **Run the Model**: Start the model using the following command:
   ```bash
   ollama run llama2
   ```

## How Assessments are Done Using Ollama

The SeekRight application integrates with Ollama to perform assessments using AI-driven models. Here’s how the assessment process works:

1. **Select Assessment Type**: Navigate to the "New Assessment" page and choose the type of assessment you want to conduct.

2. **Input Data**: Fill in the required fields and provide any necessary data for the assessment.

3. **Invoke Ollama**: When you submit the assessment, the application will invoke the Ollama model to process the input data. This is done through API calls to the locally running Ollama instance.

4. **Receive Results**: The results from the assessment will be displayed in the application, allowing you to review and analyze the findings.

5. **Save or Export Results**: You can save the assessment results or export them as needed for further analysis or reporting.

By following these steps, you can effectively use Ollama to enhance the assessment capabilities of the SeekRight application.

## Usage

- **Creating Assessments**: Navigate to the "New Assessment" page to create a new assessment. Fill in the required fields and select the appropriate questionnaires.
- **Navigating the Application**: Use the navigation panel to switch between different sections of the application.
- **Dark Mode**: Toggle dark mode for a better viewing experience in low-light conditions.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.
- Special thanks to the creators of the libraries and tools used in this project.
