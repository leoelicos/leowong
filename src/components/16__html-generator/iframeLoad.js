export default function injectHTML(formValues) {
  var d = document.getElementById('test_iframe')
  let iframedoc = d.document || d.contentDocument || d.contentWindow.document
  if (iframedoc) {
    iframedoc.open()
    iframedoc.writeln(`<html>
		<head>
		</head>
		<body>
		<h1>About me</h1>
		<ul>
		<li>👋🏻 Hi, I'm ${formValues.formName.length > 0 ? formValues.formName : '…'}</li>
		<li>🏝️ I am based in ${formValues.formLocation.length > 0 ? formValues.formLocation : '…'}</li>
		<li>💬 ${formValues.formBio.length > 0 ? formValues.formBio : '…'}</li>
		<li>🔗 Connect with me at ${formValues.formLinkedIn.length > 0 ? formValues.formLinkedIn : '…'}</li>
		<li>🧑🏻‍💻 My GitHub is ${formValues.formGithub.length > 0 ? formValues.formGithub : '…'}</li>
		</ul>
		</body>
		</html>`)
    iframedoc.close()
  } else {
    alert('Cannot inject dynamic contents into iframe.')
  }
}
