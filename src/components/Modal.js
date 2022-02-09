import { useEffect, useRef } from "react";
import useClickAway from "../hooks/useClickAway";

export default function Modal({ type, text, close, autoClose = false }) {
  const modalRef = useRef(null);

  useEffect(() => {
    let closeTimeout;

    if (autoClose) {
      closeTimeout = setTimeout(() => close(), 2000);
    }

    return () => {
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [close, autoClose]);

  useClickAway(modalRef, () => close());

  if (type === "alert") {
    return (
      <div ref={modalRef} className="alert">
        {text}
      </div>
    );
  }

  const actionButtons = !autoClose ? (
    <div className="modal__actions">
      <button className="button button--outline" onClick={() => close()}>
        Close
      </button>
      <button className="button" onClick={() => window.location.reload()}>
        Play Again
      </button>
    </div>
  ) : null;

  return (
    <div className="modal">
      <div className="modal__dialog">
        <div ref={modalRef} className="modal__content">
          <h2 className="modal__title">{text}</h2>
          {actionButtons}
        </div>
      </div>
    </div>
  );
}
