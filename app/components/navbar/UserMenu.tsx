'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
  currentUser
}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  // reverse the current value of isOpen
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    // if the current user is null, ask the user to log in
    if (!currentUser) {
      return loginModal.onOpen();
    }

    // open Rent Modal

  }, [currentUser, loginModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-3
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px]
          border-neutral-200
          flex
          flex-row
          items-center
          gap-3
          rounded-full
          cursor-pointer
          hover:shadow-md
          transition
          "
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        // menu
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            2-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div className='flex flex-col cursor-pointer'>
            {currentUser ? (
              // if the user has logged in
              <>
                <MenuItem
                  onClick={() => {}}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => {}}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => { }}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => { }}
                  label="My properties"
                />
                <MenuItem
                  onClick={() => { }}
                  label="Airbnb my home"
                />
                <hr />
                <MenuItem
                  onClick={() => signOut()}
                  label="Logout"
                />
              </>
            ) : (
              // if the user has not logged in
              <>
                <MenuItem 
                  onClick={loginModal.onOpen}
                  label="Login"
                />
                <MenuItem
                  onClick={registerModal.onOpen}
                  label="Sign up"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
