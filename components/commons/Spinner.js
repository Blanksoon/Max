import vars from './vars'

export default () => (
  <div>
    <div className="loader" />
    <style jsx>{`
      .loader {
        margin: auto auto;
        border: 4px solid ${vars.white};
        border-radius: 50%;
        border-top: 4px solid ${vars.lightRed};
        width: 20px;
        height: 20px;
        -webkit-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
      }

      @-webkit-keyframes spin {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)
