export default function injectHTML(string) {
  var d = document.getElementById('test_iframe')
  let iframedoc = d.document || d.contentDocument || d.contentWindow.document
  if (iframedoc) {
    iframedoc.open()
    iframedoc.writeln(string)
    iframedoc.close()
  } else {
    alert('Cannot inject dynamic contents into iframe.')
  }
}
