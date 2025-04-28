import React from "react";

import { motion } from "framer-motion";
import Card from '../components/ui/Card.jsx';
import CardContent from '../components/ui/CardContent.jsx';
import Button from '../components/ui/Button.jsx';
import Input from '../components/ui/Input.jsx';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm p-6"
      >
        <Card className="rounded-2xl shadow-md border border-gray-200">
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              로그인
            </h1>
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-600">
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="mt-2"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-600">
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  className="mt-2"
                />
              </div>
              <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-xl">
                로그인
              </Button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-500">
              계정이 없으신가요? <a href="#" className="text-blue-500 hover:underline">회원가입</a>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}