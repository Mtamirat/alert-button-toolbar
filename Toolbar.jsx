import AlertButton from "./AlertButton";

function Toolbar() {
  return (
    <div>
      {/* ✅ NORMAL TEST CASES */}
      <AlertButton message="Playing music">
        Play
      </AlertButton>

      <AlertButton message="Uploading file">
        Upload
      </AlertButton>

      <AlertButton message="Item deleted">
        Delete
      </AlertButton>

      {/* ⚠️ EDGE CASES */}
      <AlertButton message="">
        Empty Message
      </AlertButton>

      <AlertButton message="No label"></AlertButton>

      <AlertButton message="This is a very long message to test how alerts handle large amounts of text in the browser">
        Long Message
      </AlertButton>
    </div>
  );
}

export default Toolbar;