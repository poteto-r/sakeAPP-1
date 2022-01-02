// @ts-nocheck
// propsの型定義すること！

import React, { useState } from "react";
import { Button, Drawer } from "@material-ui/core";
import Box from "@mui/material/Box";

// ドローワーメニューのスタイル
const menuStyle = {
  //  background: "#AAA",
  height: "auto"
};

export const DrawerMenu = () => {
  const [open, setopen] = useState(false);

  const onClickNextPage = () => {
    // 特に処理はない
  };
  const toggleOpen = () => {
    setopen(!open);
  };

  return (
    <Box m={1}>
      <Button variant="outlined" color="secondary" onClick={toggleOpen}>
        開発者メニュー＞＞
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleOpen}>
        <h4>開発者メニュー</h4>
        <Box m={1} style={menuStyle}>
          <a
            href="https://muro.sakenowa.com/sakenowa-data/api/areas"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              style={{ width: "100%" }}
              variant="contained"
              color="secondary"
              onClick={() => onClickNextPage()}
            >
              産地一覧取得WEB遷移
            </Button>
          </a>
          <br />
          <br />
        </Box>
      </Drawer>
    </Box>
  );
};
