import { create } from "zustand";
import { ReactNode } from "react";
import { ModalProps, Modal } from "../ui/Modal/Modal";
import {
  ProfileEditModalProps,
  ProfileEditModal,
} from "@/features/editProfile/ui/ProfileEditModal/ProfileEditModal";

export interface ModalPropsMap {
  normal: ModalProps;
  editProfile: ProfileEditModalProps;
}

export type ModalKey = keyof ModalPropsMap;

export const modalFactory: {
  [K in ModalKey]: (props: ModalPropsMap[K]) => ReactNode;
} = {
  normal: (props) => <Modal {...props} />,
  editProfile: (props) => <ProfileEditModal {...props} />,
};

interface ModalState {
  activeKey: ModalKey | null;
  modalProps: ProfileEditModalProps | ModalProps | null;
  openModal: <K extends ModalKey>(key: K, props: ModalPropsMap[K]) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeKey: null,
  modalProps: null,

  openModal: (key, props) => set({ activeKey: key, modalProps: props }),
  closeModal: () => set({ activeKey: null, modalProps: null }),
}));
