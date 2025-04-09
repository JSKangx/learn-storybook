import { useState } from "react";
import Modal from "./Modal";

export default function ModalSample() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        모달 열기
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold">모달 제목</h2>
        <p className="text-sm text-gray-600 mt-2">
          이것은 모달 내용입니다. 확인, X 버튼, 모달 외부를 클릭하거나 ESC를
          눌러 닫을 수 있습니다.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          확인
        </button>
      </Modal>
    </div>
  );
}
