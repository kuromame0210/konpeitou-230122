using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class StageManager : MonoBehaviour
{

    public enum StageCount
    {
        stage1,
        stage2,
        stage3,
        stage4,
        stage5,
        stage6,
        stage7,
        stage8,
    }

    public GameObject[] stageObj;
    public StageCount on_stage_count;



    //この値によっておみくじの出す番号を決める
    public int omikuji_randam_number;

    //おみくじの種類によって出し分けるためのもの
    public Texture[] konpeitou_images;
    public Texture[] omikuji_tite_images;
    public Texture[] omikuji_detail_images;
    public string[] konpeitou_title;


    // Start is called before the first frame update
    void Start()
    {
        on_stage_count = StageCount.stage1;
        Invoke("MusicStart", 1.25f);

    }

    private void MusicStart()
    {
        GetComponent<AudioSource>().Play();
    }


    // Update is called once per frame
    void Update()
    {
        //縦横比が16:9よりも縦の長さが大きい時（iPhone8以降）

        //portlate
        if (Screen.width < Screen.height)
        {
            for (int i = 0; i < stageObj.Length; i++)
            {
                //デフォルトが x:0.5 y:0.5 z:0.5
                stageObj[i].transform.localScale = new Vector3(0.6f, 0.6f, 0.6f);
                stageObj[0].transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
                stageObj[1].transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
                stageObj[2].transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
                stageObj[3].transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);
                stageObj[7].transform.localScale = new Vector3(0.5f, 0.5f, 0.5f);


                //縦横費が2倍以上の時（iphoneX以上）
                if (Screen.height / Screen.width >= 2.0f)
                {
                    stageObj[i].transform.localScale = new Vector3(1.4f, 1.4f, 1.4f);
                    stageObj[0].transform.localScale = new Vector3(1f, 1f, 1f);
                    stageObj[1].transform.localScale = new Vector3(1f, 1f, 1f);
                    stageObj[2].transform.localScale = new Vector3(1f, 1f, 1f);
                    stageObj[3].transform.localScale = new Vector3(1f, 1f, 1f);
                    stageObj[7].transform.localScale = new Vector3(1f, 1f, 1f);
                }

            }
        }
        else //landscape
        {
            for (int i = 0; i < stageObj.Length; i++)
            {
                stageObj[i].transform.localScale = new Vector3(0.6f, 0.6f, 0.6f);
            }
        }


        if (Input.GetMouseButtonDown(0))
        {
            //if(on_stage_count == StageCount.stage1)
            //{
            //    on_stage_count = StageCount.stage2;
            //    stageObj[0].gameObject.SetActive(false);
            //    stageObj[1].gameObject.SetActive(true);
            //}
            //else
            if (on_stage_count == StageCount.stage2)
            {
                on_stage_count = StageCount.stage3;
                stageObj[1].gameObject.SetActive(false);
                stageObj[2].gameObject.SetActive(true);
            }
            //else
            //if (on_stage_count == StageCount.stage3)
            //{
            //    on_stage_count = StageCount.stage4;
            //    stageObj[2].gameObject.SetActive(false);
            //    stageObj[3].gameObject.SetActive(true);
            //    audioSource.PlayOneShot(sound1);
            //}
            else if (on_stage_count == StageCount.stage4)
            {
                //on_stage_count = StageCount.stage5;
                //stageObj[3].gameObject.SetActive(false);
                //stageObj[4].gameObject.SetActive(true);
            }
            else if (on_stage_count == StageCount.stage5)
            {
                //on_stage_count = StageCount.stage6;
                //stageObj[4].gameObject.SetActive(false);
                //stageObj[5].gameObject.SetActive(true);
            }
            else if (on_stage_count == StageCount.stage6)
            {
                on_stage_count = StageCount.stage7;
                stageObj[5].gameObject.SetActive(false);
                stageObj[6].gameObject.SetActive(true);
            }
            else if (on_stage_count == StageCount.stage7)
            {
                //on_stage_count = StageCount.stage8;
                //stageObj[6].gameObject.SetActive(false);
                //stageObj[7].gameObject.SetActive(true);
            }
        }

    }

    public void PlayReturn()
    {
        on_stage_count = StageCount.stage2;
        stageObj[7].gameObject.SetActive(false);
        stageObj[1].gameObject.SetActive(true);
    }


}
