import React, { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import ReactFocusLock from "react-focus-lock";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // overlay 요소를 선택
  const overlayRef = useRef<HTMLDivElement>(null);

  // 모달이 열릴 때 이전에 포커스된 요소를 저장
  const previousFocusElement = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (isOpen) {
      previousFocusElement.current = document.activeElement as HTMLElement;
    }

    return () => {
      if (isOpen && previousFocusElement.current) {
        previousFocusElement.current.focus();
      }
    };
  }, [isOpen]);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    // 모달 창이 열린 상태면 keydown 이벤트에 이벤트리스너 등록
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    // 모달창이 언마운트될 때 이벤트 리스너 제거하여 메모리 누수 방지
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 바깥 영역 클릭시 닫기
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  // 모달이 닫히면 아무것도 렌더링하지 않음.
  if (!isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      {/* FocusLock 컴포넌트로 감싸서 포커스 트랩 구현 */}
      <ReactFocusLock returnFocus={true} lockProps={{ tabIndex: -1 }}>
        <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-black"
            aria-label="닫기"
          >
            x
          </button>
          {children}
        </div>
      </ReactFocusLock>
    </div>,
    document.body
  );
}
