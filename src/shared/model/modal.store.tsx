import { create } from "zustand";
import { ReactNode } from "react";
import { ModalProps, Modal } from "../ui/Modal/Modal";
import {
  ProfileEditModalProps,
  ProfileEditModal,
} from "@/features/editProfile/ui/ProfileEditModal/ProfileEditModal";
import {
  PostCreateModalProps,
  PostCreateModal,
} from "@/features/createPost/ui/PostCreateModal/PostCreateModal";
import {
  PostEditModalProps,
  PostEditModal,
} from "@/features/editPost/ui/PostEditModal";

export interface ModalPropsMap {
  normal: ModalProps;
  editProfile: ProfileEditModalProps;
  createPost: PostCreateModalProps;
  editPost: PostEditModalProps;
}

export type ModalKey = keyof ModalPropsMap;

export const modalFactory: {
  [K in ModalKey]: (props: unknown) => ReactNode;
} = {
  normal: (props) => <Modal {...(props as ModalProps)} />,
  editProfile: (props) => (
    <ProfileEditModal {...(props as ProfileEditModalProps)} />
  ),
  createPost: (props) => (
    <PostCreateModal {...(props as PostCreateModalProps)} />
  ),
  editPost: (props) => <PostEditModal {...(props as PostEditModalProps)} />,
};

interface ModalState {
  activeKey: ModalKey | null;
  modalProps: ModalPropsMap[ModalKey] | null;
  openModal: <K extends ModalKey>(key: K, props: ModalPropsMap[K]) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeKey: null,
  modalProps: null,

  openModal: (key, props) => set({ activeKey: key, modalProps: props }),
  closeModal: () => set({ activeKey: null, modalProps: null }),
}));
